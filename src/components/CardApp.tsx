import {ReactNode} from 'react'
import '../styles/card.css'


interface Props {
    title: string;
    img: string;
    links: string[];
    children?: ReactNode
    mobile?: boolean,
    technology?: 'flutter' | 'android' | 'web'
}

export const CardApp = ({ title, img, links, children, mobile = false, technology }: Props) => {
  return (
    <div className="card-content">
        {
            (technology == 'flutter') && 
            <div className="flutter-tag">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztvcotJdGL2Y2aw9VODom93XN2jDQNu8ZtIEdcwGgYw&s" alt="" />
            </div>
        }
        {
            (technology == 'android') && 
            <div className="flutter-tag android">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Android_logo_2019_%28stacked%29.svg/1173px-Android_logo_2019_%28stacked%29.svg.png" alt="" />
            </div>
        }
        {
            (technology == 'web') && 
            <div className="flutter-tag android">
                <img src="https://cdn-icons-png.flaticon.com/512/8522/8522275.png" alt="" />
            </div>
        }
        <div className="card-image-container">
            <img src={img} className='card-image' />
        </div>
        <div className="card-body">
            <span className="card-body-title">{title}</span>
            <p className="card-body-description">{children}</p>
        </div>
        {
            (technology == 'web') ?
            <div className="card-footer web">
                <a href={links[0]} target='_blank'>
                    <img className="github" src="https://images.vexels.com/media/users/3/205567/isolated/preview/4d5ea599b99bc9b1f7f33580892b7dbc-sitio-web-www-trazo-de-icono-de-cursor.png" alt="" />
                </a>
            </div>
            :
            (mobile) 
            ? 
            <div className="card-footer">
                <a href={links[0]} target='_blank'>
                    <img className='android' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
                </a>
                {
                    links.length > 1 &&
                    <a href={links[1]} target='_blank'>
                        <img className='apple' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQLqwi9F6CXXwa2n8k81GVFTNvIB7OHGnwZpmpN5ayEw&s" alt="" />
                    </a>
                }
            </div>
            :
            <div className="card-footer">
                <a href={links[0]} target='_blank'>
                    <img className="github" src="https://static.vecteezy.com/system/resources/previews/016/833/880/non_2x/github-logo-git-hub-icon-with-text-on-white-background-free-vector.jpg" alt="" />
                </a>
            </div>
        }
    </div>
  )
}
