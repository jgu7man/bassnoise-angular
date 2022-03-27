import { Injectable, ElementRef } from '@angular/core';
import { fromEvent, merge, Observable } from 'rxjs';
import { debounceTime, pluck, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class MxResponsive {


  public extraSmallWidth
  public smallWidth
  public medWidth
  public largeWidth
  public extraLargeWidth
  public stretchHeight
  public fullHeight = window.innerHeight
  public fullWidth = window.innerWidth

  constructor () {
    this.extraSmallWidth = 320
    this.smallWidth = 414
    this.medWidth = 768
    this.largeWidth = 1366
    this.extraLargeWidth = 1600

    this.stretchHeight = this.small ?
      window.innerHeight - 64 - 49 :
      window.innerHeight - 64

  }

  /** Boolean that defines is small width device. Based in smallWidth property. DEFAULT: 320px */
  get extraSmall() {
    return window.screen.width < this.extraSmallWidth ? true : false
  }

  /** Boolean that defines is small width device. Based in smallWidth property. DEFAULT: 414px */
  get small() {
    return window.screen.width < this.smallWidth ? true : false
  }

  /** Boolean that defines is medium width device. Based  sizes between smallWidth and medWidth property. DEFAULT: 414px - 700px*/
  get med() {
    return window.screen.width > this.smallWidth &&
    window.screen.width < this.medWidth ? true : false
  }

  /** Boolean that defines is large width device. Based in largeWidth property. DEFAULT: 768px */
  get large() {
    return window.screen.width > this.medWidth? true : false
  }

  /** Boolean that defines is extra large width device. Based in extraLargeWidth property. DEFAULT: 1366px */
  get extraLarge() {
    return window.screen.width > this.extraLargeWidth? true : false
  }

  /**
   * Heigth result element top to window bottom
   *
   * @param {ElementRef} el
   * @returns {*} Heigth result
   */
  strechHeigth(el: ElementRef) {
    var y = el.nativeElement.getBoundingClientRect().y
    return this.fullHeight - y
  }

  /**
   * Gets the device size between sizes defined
   *
   * @readonly
   */
  public get deviceSize() {
    if (this.fullWidth < this.extraSmallWidth) {
      return 'extraSmall'
    }
    else if (
      this.fullWidth > this.extraSmallWidth && this.fullWidth < this.smallWidth
    ) {
      return 'small'
    } else if (
      this.fullWidth < this.medWidth && this.fullWidth > this.largeWidth
    ) {
      return 'med'
    } else if (
      this.fullWidth < this.largeWidth && this.fullWidth > this.extraLargeWidth
    ) {
      return 'large'
    } else if ( this.fullWidth > this.largeWidth ) {
      return 'extraLarge'
    } else {
      return 'unrecognized'
    }
  }

  /** Returns events of window resize width
   * @returns {*}  {Observable<number>}
   */
  get listenWidthResize(): Observable<number> {
    return merge(
      // listen first
      fromEvent(window, "load")
        .pipe(debounceTime(500),pluck<any, number>("currentTarget", "innerWidth"),
      ),
      // listen after
      fromEvent(window, "resize")
        .pipe<any, number>(debounceTime(500), pluck("currentTarget", "innerWidth"))
    )
  }

  /** Returns events of window resize heigth
   * @returns {*}  {Observable<number>}
   */
  get listenHegithResize(): Observable<number> {
    return merge(
      // listen first
      fromEvent(window, "load")
        .pipe(debounceTime(500),pluck<any, number>("currentTarget", "innerHeght"),
      ),
      // listen after
      fromEvent(window, "resize")
        .pipe<any, number>(debounceTime(500), pluck("currentTarget", "innerHeght"))
    )
  }


}
