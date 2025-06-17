import { memo } from 'react'

const Contact = memo(() => {
  return (
    <>
    <div className="align-items-center justify-center mx-auto my-25">
    <h2 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-4xl max-sm:text-xl font-bold my-25 p-1">Curious to know more? Get in touch through:</h2>
    <a className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-2xl max-sm:text-xl font-bold my-10 p-2" href="https://www.upwork.com/freelancers/~0167ec214df1a3b891?mp_source=share">Upwork</a>
    <br /><br />
    <a className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-2xl max-sm:text-xl font-bold my-10 p-2" href="https://www.freelancer.com/u/rama2006?frm=rama2006&sb=t">Freelancer.com</a>
    <h2 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-2xl max-sm:text-xl font-bold my-5 p-1">Discord: rama00830</h2>
    <h2 className="bg-gradient-to-r from-orange-600 to-amber-400 bg-clip-text text-transparent text-center text-2xl max-sm:text-xl font-bold my-5 p-1">Email: miqra1612@gmail.com</h2>
    
    </div>
    
    </>
  )
})

export default Contact