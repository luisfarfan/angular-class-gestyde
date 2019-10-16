import {
    AfterViewInit,
    Component,
    ElementRef,
    OnDestroy,
    OnInit, QueryList,
    Renderer2,
    ViewChild,
    ViewChildren
} from '@angular/core';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';

@Component({
    selector: 'app-user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit, AfterViewInit, OnDestroy {
    interval;
    @ViewChild('divElement', {static: false}) divElement: ElementRef<HTMLDivElement>;
    @ViewChild(ClientsComponent, {static: false}) clientComponent: ClientsComponent;
    @ViewChildren('spanElement') spanElements: QueryList<ElementRef<HTMLSpanElement>>;

    constructor(private renderer: Renderer2) {
    }

    ngOnInit() {
        console.log(this.divElement);
        this.runInterval();
    }

    ngAfterViewInit(): void {
        // this.renderer.addClass(this.divElement.nativeElement, 'padding');
        console.log(this.divElement.nativeElement.className = 'padding');
        console.log(this.clientComponent);
        console.log(this.spanElements);
        this.clientComponent.sayHello();
    }

    runInterval(): void {
        this.interval = setInterval(() => {
            console.log('HOLA CORRIENDO INTERVAL');
        }, 250);
    }

    alert(): void {
        alert('EStoy en user componente');
    }

    ngOnDestroy(): void {
        // clearInterval(this.interval);
        // this.interval = null;
    }
}
