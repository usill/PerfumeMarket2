class CarouselHook {
  private slider: HTMLElement | null;
  private slidesList: HTMLElement | null;
  private sticks: Element[];

  private sliderWidth: number = 0;
  private currentIndex: number = 0;
  private readonly maxElem: number = 2;

  private beforeButton: HTMLElement | null = null;
  private nextButton: HTMLElement | null = null;

  private intervalId: NodeJS.Timeout | null = null;

  public constructor() {
    this.slider = null;
    this.slidesList = null;
    this.sticks = [];
  }

  public useCarousel(carouselId: string) {
    this.slider = document.querySelector(carouselId) as HTMLElement;
    this.slidesList = this.slider.firstElementChild as HTMLElement;
    this.sticks = [...this.slider.querySelectorAll("#sticks")];

    this.sliderWidth = this.slider.clientWidth;

    if (
      !this.sliderWidth ||
      !this.slidesList ||
      !this.slider ||
      !this.sliderWidth
    ) {
      console.warn("Fail to init carousel");
      return;
    }

    this.beforeButton = this.slider.querySelector("#slider-before-button");
    this.nextButton = this.slider.querySelector("#slider-next-button");

    this.setEvents();
    this.intervalId = setInterval(this.nextSlide.bind(this), 3000);
  }

  private nextSlide() {
    const index = this.checkPosition(this.currentIndex + 1);
    const beforeIndex = this.currentIndex - 1;
    this.changeSlideTo(index, beforeIndex);
  }

  private beforeSlide() {
    const index = this.checkPosition(this.currentIndex - 1);
    const beforeIndex = this.currentIndex + 1;
    this.changeSlideTo(index, beforeIndex);
  }

  private checkPosition(index: number): number {
    let result = 0;

    if (index <= this.maxElem) {
      result = index;
    }
    if (index < 0) {
      result = this.maxElem;
    }

    this.currentIndex = result;
    return result;
  }

  private changeSlideTo(index: number, beforeIndex: number) {
    if (index || index === 0) {
      this.currentIndex = index;
    }
    if (beforeIndex < 0) {
      beforeIndex = this.maxElem;
    }
    if (beforeIndex > this.maxElem) {
      beforeIndex = 0;
    }

    if(this.slidesList) {
        this.slidesList.style.right = this.sliderWidth * this.currentIndex + "px";
        this.changeStickTo(beforeIndex);
    }
  }

  private changeStickTo(beforeIndex: number) {
    const activeStick = this.sticks[this.currentIndex] as HTMLElement;
    const beforeStick = this.sticks[beforeIndex] as HTMLElement;

    activeStick.classList.remove("hidden");
    beforeStick.classList.add("hidden");
  }

  private setEvents() {
    this.beforeButton?.addEventListener("click", this.beforeSlide.bind(this));
    this.nextButton?.addEventListener("click", this.nextSlide.bind(this));

    window.addEventListener("resize", () => {
      if (this.slider?.clientWidth) {
        this.sliderWidth = this.slider.clientWidth;
      }
    });

    this.slider?.addEventListener("mouseenter", () => {
      if (this.intervalId) {
        clearInterval(this.intervalId);
      }
    });

    this.slider?.addEventListener("mouseleave", () => {
      this.intervalId = setInterval(this.nextSlide.bind(this), 3000);
    });

    this.sticks.forEach((value, index) => {
      const stick: HTMLElement = value.parentElement as HTMLElement;

      stick.addEventListener("click", () => {
        let currentActiveStick = 0;

        this.sticks.forEach((v, i) => {
          if (!v.classList.contains("hidden")) {
            currentActiveStick = i;
          }
        });

        this.changeSlideTo(index, currentActiveStick);
      });
    });
  }
}

export default new CarouselHook();
