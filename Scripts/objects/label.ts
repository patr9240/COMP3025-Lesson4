module objects {
    export class Label extends createjs.Text {
        //Constructor
        constructor(public labelString:string, public fontFamily:string, public fontColour:string, public centered:boolean, x:number, y:number) {
            super(labelString, fontFamily, fontColour);

            this.Start();
            this.x = x;
            this.y = y;
        }
        public Start():void {
            if(this.centered){
                this.regX = this.getMeasuredWidth() * 0.5;
                this.regY = this.getMeasuredLineHeight() *0.5;
            }
        }
    }
}