import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { SliderComponent } from "../front/index-module/slider/slider.component";
import { ActionComponent } from "./action/action.component";
import { LiveChatComponent } from "./live-chat/live-chat.component";

@NgModule({
    imports: [CommonModule, FormsModule,],
    exports: [SliderComponent , LiveChatComponent,ActionComponent],
    declarations: [SliderComponent,LiveChatComponent,ActionComponent],
})
export class ComponentsModule { }