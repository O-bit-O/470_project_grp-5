import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-end gap-3 mb-20'>
        <a href='#about' className='bg-black p-2 rounded text-orange-400' >Contact Us</a>
        <Link to={"/login"}><button className="btn btn-primary text-green-400">Login</button></Link>
      </div>
      <div className='flex justify-center'>
        {/* <a href="https://vitejs.dev" target="_blank"> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTlwxu5YYTbZG-xWEBdSbHLKxcac_x8wM-dQ&usqp=CAU" className="w-80" alt="Vite logo" />
        {/* </a> */}
        {/* <a href="https://react.dev" target="_blank"> */}
        <img src="https://img.freepik.com/premium-vector/delivery-man-protective-mask-delivers-medicine-by-motorbike_208509-465.jpg" className="w-80" alt="React logo" />
        {/* </a> */}
      </div>
      <h1>Medicine Delivery System</h1>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
      <h2>Procedure</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde vitae facilis nihil recusandae nemo possimus voluptatem minus eos velit voluptatibus error blanditiis maxime laudantium, nulla, voluptas minima delectus dignissimos. Culpa aperiam qui officiis eos voluptate repudiandae consequatur, aliquam sapiente a quam, dignissimos officia illum. Dolorum tempora culpa doloribus aliquam minima esse officiis facilis illo fugit nisi expedita, labore mollitia autem provident accusantium repellat. Quasi optio at natus? Porro veniam maxime vel dolores atque eius optio iusto a, culpa modi adipisci quibusdam consequatur, eveniet id delectus officia voluptatem repellendus saepe? Saepe corporis repudiandae sequi tenetur alias debitis, omnis corrupti repellat exercitationem dolore eveniet quam. Omnis voluptatum natus hic ab ipsa aliquam, facilis dolores sequi molestiae eum dolorem vitae ea commodi eveniet accusantium, voluptatibus expedita eos nihil. Est excepturi quos itaque minus, placeat ex consequuntur saepe iste qui cupiditate vero perspiciatis voluptas ut accusamus voluptates veritatis numquam, obcaecati necessitatibus possimus labore omnis distinctio? Omnis corporis tempore quod non ab nihil nesciunt quaerat cum, id molestiae dolore voluptatem! Unde, doloribus laborum? Inventore sed nisi error, nam sint deserunt. Assumenda ducimus harum nesciunt magnam nulla provident veritatis, fugit corrupti quia nemo est obcaecati. In ratione blanditiis eum nihil labore nobis doloremque tempora assumenda quas!</p>
      <h2 id="about">About Us</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, id. Dolores cupiditate nesciunt, dolorem deserunt quam, ullam perferendis in cumque ducimus vel quis blanditiis accusantium earum voluptates. Molestiae voluptatem, aliquid sed nulla fuga assumenda veritatis repudiandae in pariatur consectetur nam maxime at perferendis quidem! Accusamus atque quaerat ipsum magni ratione, itaque quibusdam delectus enim, sint doloremque, commodi necessitatibus impedit saepe reiciendis. Laborum incidunt laudantium quae excepturi nemo dolore dolorem repellendus magnam mollitia. Alias quam ab commodi minima nobis ratione dolorem, consequuntur pariatur, eum delectus hic ea earum facilis corporis dolores tempora libero laboriosam! Nesciunt nihil, delectus adipisci facilis doloremque exercitationem nobis sint neque quidem tempore accusamus commodi sit eius dicta maiores blanditiis facere recusandae possimus ex quos quibusdam harum! Mollitia accusantium fugiat, natus eos dolores nesciunt voluptates, non optio quo harum blanditiis voluptatibus alias! Nesciunt nisi veritatis aspernatur, veniam ipsa fugiat optio praesentium harum nemo a saepe facere voluptatum tenetur quas placeat eveniet non sint doloribus aliquid consequuntur nobis reiciendis minus consectetur suscipit! Eaque vel libero delectus molestiae ducimus corrupti ipsa nulla, placeat, sunt distinctio exercitationem qui quae voluptas optio suscipit magni fugit recusandae vitae magnam est ab amet pariatur tempora mollitia? Consequatur quibusdam expedita cumque alias iusto, omnis velit deserunt perspiciatis, inventore nulla est molestias aperiam quaerat esse id quas labore veritatis, dicta itaque cupiditate minus vero ad. Nesciunt similique architecto, culpa impedit facilis ab ut reiciendis maxime nemo amet optio accusamus adipisci deleniti quis libero unde suscipit nulla earum quas illo neque ipsum animi assumenda. Vel quo ipsam totam. Sed quos earum sit, eum voluptatibus aliquid est at quam, quaerat voluptatum pariatur totam doloribus porro placeat dolorum mollitia atque quisquam cupiditate, quod natus adipisci. Adipisci quisquam tenetur placeat harum veniam facilis quod fugiat quis, ex natus quo cum in quos reprehenderit nesciunt sapiente perspiciatis doloremque hic temporibus pariatur dolorum! Fuga unde numquam tenetur eius doloremque ducimus deserunt velit nostrum delectus consequatur possimus laborum nisi quae rem reprehenderit, nam ad eos consectetur error molestiae sequi! Officiis tenetur temporibus ipsa alias enim fugit maiores exercitationem odit vel earum quas odio blanditiis doloribus nobis assumenda soluta eaque tempora vitae ea, suscipit corrupti. Voluptatibus culpa aspernatur saepe, doloremque dolorem nisi asperiores laudantium perferendis voluptatum velit perspiciatis impedit provident at nulla, numquam voluptates? Consectetur ullam fugiat harum molestias et maiores aliquid temporibus facilis repudiandae aspernatur sunt minima itaque, voluptate, id quos ducimus sapiente, obcaecati iusto dolore dolor cum recusandae ex officiis. Dicta voluptas quod deleniti? Similique blanditiis dolore illo neque labore. Repellat consequatur ipsum, fuga maxime reiciendis rerum. Deserunt, fugiat porro nostrum quisquam sint vero repellat nihil tenetur, libero alias provident a incidunt iure velit, ab expedita? Perferendis, laboriosam minus voluptatum vitae molestias, illo, fugit eius hic quos voluptatem porro aliquid. Vitae quo explicabo impedit ducimus, nisi autem dolorem? Nisi enim delectus facilis autem eius temporibus commodi ex, magnam omnis, vel id cum consequatur ut amet deserunt fugiat ad, quisquam dignissimos perferendis. Suscipit quo deserunt atque adipisci recusandae, vero modi mollitia molestiae porro. Possimus autem laudantium amet provident velit, quisquam qui optio nostrum.</p>  

      <p id='about'>about</p>
    </>
  )
}

export default App
