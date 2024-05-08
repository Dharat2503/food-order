import landingImmg from "../assets/landing.png"
import appstore from "../assets/appDownload.png"

export default function HomePage() {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold text-orange-600 tracking-normal">
                    WHAT'S ON YOUR MIND?
                </h1>
                <span className="text-xl">Explore Carvings</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImmg} />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-3xl tracking-tighter">
                    Food is just at your place!!
                    </span>
                    <span >
                    Download the app now for faster and easier access to your favorite food.
                    </span>
                    <img src={appstore} />
                </div>
            </div>
        </div>
    )
}
