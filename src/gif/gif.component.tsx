import './gif.css'

export const GIF_ID = 'gif'
export const PLAYING_CLASS = 'playing'
export const PAUSED_CLASS = 'paused'

export function Gif(){
    return(
        <div id={GIF_ID} className={PAUSED_CLASS}/>
    )
}