import React from 'react'

export const WelcomeSec = () => {
  return (
    <section style={{ display:"flex",justifyContent:"space-between",alignItems:"center",height:"500px" }}>
        <div className="welcome-left" style={{  }}>
            <h1 className="welcome-title">Welcome To <span style={{ color:"#F3525A " }}>CONSULT</span></h1>
            <p className="welcome-descriptionOne">Diam dolor diam ipsum sit. Clita erat ipsum et lorem stet no lorem sit clita duo <br /> justo magna dolore</p>
            <p className="welcome-descriptionTwo">Et stet ipsum nonumy rebum eos justo, accusam invidunt aliquyam stet magna at et sanctus, vero sea sit amet <br /> dolores, sit dolor duo invidunt dolor, kasd rebum consetetur diam invidunt erat stet. Accusam nonumy lorem kasd <br />eirmod. Justo clita sadipscing ea invidunt rebum sadipscing consetetur. Amet diam amet amet sanctus <br /> sanctus invidunt erat ipsum eirmod.</p>
            <button className="welcome-btn">Get A Quote</button>
        </div>
        <div className='welcome-right'>
            <div >
                <div>
                    <img src="" alt="" />
                    <h2>Business Planning</h2>
                    <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>Financial Analaysis</h2>
                    <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                </div>
                <div>
                    <img src="" alt="" />
                    <h2>legal Advisory</h2>
                    <p>Tempor erat elitr rebum at clita. Diam dolor ipsum amet eos erat ipsum lorem et sit sed stet lorem sit clita duo</p>
                </div>
               
            </div>
        </div>
    </section>
  )
}
