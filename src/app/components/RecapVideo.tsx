export default function RecapVideo(){
return (
<div className="h-screen relative overflow-hidden">
        <video 
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/coi-recap.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
)
}