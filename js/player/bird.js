import Sprite from '../base/sprite'
import DataBus from '../databus'

const screenWidth = window.innerWidth
const screenHeight = window.innerHeight

// 玩家相关常量设置
const PLAYER_IMG_SRC = 'images/bird2.jpg'
const PLAYER_WIDTH = 40
const PLAYER_HEIGHT = 60
const PLAYER_SPEED = 0.2
let databus = new DataBus()

export default class Bird extends Sprite {
  constructor() {
    super(PLAYER_IMG_SRC, PLAYER_WIDTH, PLAYER_HEIGHT,PLAYER_SPEED)

    // 玩家默认处于屏幕底部居中位置
    this.x = screenWidth / 2 - this.width / 2
    this.y = screenHeight - this.height - PLAYER_HEIGHT*2
    this.speed = PLAYER_SPEED

    // 初始化事件监听
    this.initEvent()
  }
  initEvent() {
    canvas.addEventListener('click', ((e) => {
      e.preventDefault()
      // this.x = 160
      console.log('click')
    }).bind(this))
  }
  update(){
    let speed = this.speed +0.1
    let x = this.x
    this.x = speed + x
    console.log(x)
  }
  isOutOfBound(){
    // console.log(this.x)
    // console.log(screenWidth)
    if (this.x > screenWidth)
    {
      console.log("jude true")
      return true
    }
  }
}