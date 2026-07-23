import { heroImages } from '../../data/heroImages'

export default function HeroCards() {
    return(
        <div className="flex justify-center items-end gap-4 px-6 py-16">

            {/* Card 1 - Desenvolvedora Fullstack */}
            <div className="w-55 rounded-3xl bg-linear-to-br from-orange-400 to-pink-500 p-3 -rotate-6">
              <p className="text-white font-semibold mb-2 px-1">
                Desenvolvedora Fullstack
              </p>
              <img
                src={heroImages.fullstack}
                alt="Desenvolvedora Fullstack"
                className="rounded-2xl w-full h-64 object-cover"
              />
              </div>

              {/*   Card 2 - Criadora de Soluções */}
              <div className="w-55 rounded-3xl bg-gray-900 p-3 z-10">
                <p className="text-white font-semibold mb-2 px-1">
                    Criadora de Soluções
                </p>
                <img
                  src={heroImages.solucoes}
                  alt="Criadora de Soluções"
                  className="rounded-2xl w-full h-72 object-cover"
                  />
                </div>

                {/* Card 3 - Focada em Pessoas */}
                <div className="w-55 rounded-3xl bg-linear-to-br from-purple-500 to-indigo-500 p-3 rotate-6">
                    <p className="text-white font-semibold mb-2 px-1">
                        Focada em Pessoas
                    </p>
                    <img
                      src={heroImages.pessoas}
                      alt="Focada em Pessoas"
                      className="rounded-2xl w-full h-64 object-cover"
                      />
                    </div>    
        </div >
    )
}
