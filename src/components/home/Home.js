import React from 'react'

import './Home.css'
import arrow_down from '../../img/arrow_down.svg'

export default function Home() {

  const HomeInfo = {
    title: 'Juan Batty',
    description: 'Fullstack .NET and Javascript Developer',
    accounts: [
      {
        iconClass: 'fab fa-github github',
        url: 'https://github.com/jmbl1685'
      },
      {
        iconClass: 'fab fa-twitter twitter',
        url: 'https://twitter.com/jmbl1685'
      },
      {
        iconClass: 'fab fa-linkedin linkedin',
        url: 'https://www.linkedin.com/in/juan-manuel-batty-linero-ba955a138/'
      },
      {
        iconClass: 'fab fa-youtube youtube',
        url: 'https://www.youtube.com/channel/UCO2Ugy7W2xHZ6sDGBiRizrg'
      },
      {
        iconClass: 'fab fa-instagram instagram',
        url: 'https://www.instagram.com/juanbatty/'
      },
      {
        iconClass: 'far fa-envelope envelope',
        url: 'mailto:jmbl1685@hotmail.com'
      }
    ]
  }

  return (
    <div>
      <div className="header">
        <div className="textos">
          <h1 className="titulo">{HomeInfo.title}</h1>
          <h3 className="subtitulo job">{HomeInfo.description}</h3>
          {
            HomeInfo.accounts.map((item, index) => {
              return <a key={index} href={item.url} target="_blank" className="icon"><i className={item.iconClass}></i></a>
            })
          }
          <div><br/>
            <img height="22" width="22" src={arrow_down} alt="arrow_down" />
          </div>
        </div>
        <div className="sesgoabajo"></div>
      </div>
    </div>
  )
}