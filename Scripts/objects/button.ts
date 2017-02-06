module objects {
    export class Button extends createjs.Bitmap {
        //Constructor
        constructor(public imagePath:string, public centered:boolean, x:number, y:number) {
            super(imagePath);

            this.Start();
            this.x = x;
            this.y = y;

            this.on("mouseover", this._Over);
            this.on("mouseout", this._Out);
        }
        public Start():void {
            if(this.centered){
                this.regX = this.getBounds().width * 0.5;
                this.regY = this.getBounds().height * 0.5;
            }
        }
        private _Over(event:createjs.MouseEvent):void {
            this.alpha = 0.7;
        }
        private _Out(event:createjs.MouseEvent):void{
            this.alpha = 1;
        }
    }
}