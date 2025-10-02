import React from 'react'
import { cocktailLists, mockTailLists } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const Cocktails = () => {
    useGSAP(()=>{
        const parallaxTimeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#cocktails',
                start:'top 30%',
                end:'bottom 80%',
                scrub:true
            }
            
        })
        .from('#c-left-leaf',{
                y:100,
                x:-100
            })
            .from('#c-right-leaf',{
                x:100,
                y:100
            })

    },[])
  return (
    <section id='cocktails' className='noisy'>
        <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id='c-left-leaf' />
        <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id='c-right-leaf' />
        <div className="list">
            <div className="popular">
                <h2>Most popular cocktails</h2>
                <ul>
                    {cocktailLists.map(({name,country,price,detail})=>(

                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                                <span>- {price}</span>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>Most popular mocktails</h2>
                <ul>
                    {mockTailLists.map(({name,country,price,detail})=>(

                        <li key={name}>
                            <div className="md:me-28">
                                <h3>{name}</h3>
                                <p>{country} | {detail}</p>
                                <span>- {price}</span>
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </section>
  )
}

export default Cocktails
