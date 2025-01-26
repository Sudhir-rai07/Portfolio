
import services from '../Constants/services.json'
import { HiMiniCube } from 'react-icons/hi2'
const Services = () => {
  return (
    <div className="relative w-4/5 mb-8 ">
      <div className="absolute left-0 text-2xl font-semibold">
        <span className="text-orange-700">Services</span>
      </div>

      <div className="relative flex flex-wrap justify-center w-full mt-10 gap-8">
        {services.map((items, idx) => (
          <div key={idx}>
            <div className="max-w-sm rounded-lg border border-green-200 bg-gradient-to-r from-green-100 via-green-50 to-green-100 shadow-md p-6">
            <button className="px-4 text-4xl text-green-950 py-2 rounded-md transition">
            <HiMiniCube  />
              </button>
              <h3 className="text-2xl font-semibold text-green-800 mb-3">
                {items.service}
              </h3>
              <p className="text-green-700 mb-4">{items.text}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services
