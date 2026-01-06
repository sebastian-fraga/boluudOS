import { useEffect, useState } from "react";
import AppIcon from "./AppIcon.jsx";

function App() {
  const [currentTime, setCurrentTime] = useState("");
  const [openedLink, setOpenedLink] = useState(null);
  const closeApp = () => {
    setOpenedLink(null);
  }
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("es-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const apps = [
    { name: "FaceTime", img: "https://upload.wikimedia.org/wikipedia/commons/6/62/FaceTime_iOS.svg", link: "" },
    { name: "Calendar", img: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Apple_Calendar_%28iOS%29.svg", link: "" },
    { name: "Photos", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/b4/c2/c5/b4c2c5e9-2963-ab4e-1bfe-c190ab45de0e/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Camera", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/67/a7/0e/67a70e05-65c5-f435-fe06-a2a5d07b3ceb/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Mail", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/a5/f4/92/a5f492ef-0a00-36ae-9f64-b7ea39edaf4b/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Clock", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/01/15/88/01158845-97c8-5cd4-5560-bc8ddb2953a0/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Maps", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/64/4a/af/644aaf63-e217-2779-8098-876d5d30eb62/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Weather", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/18/7e/45/187e453a-6a92-f8f1-53b2-5d72a46a7e05/Placeholder.mill/200x200bb-75.webp", link: "https://sebaweather.vercel.app/" },
    { name: "Vice Club", img: "https://viceclub.vercel.app/assets/images/main/logo.webp", link: "https://viceclub.vercel.app/" },
    { name: "Facebook", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/d7/7e/1e/d77e1e00-5095-7589-6794-bca16df6e54d/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Calculator", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/0b/48/36/0b483611-ebfd-3f86-4636-529997a78283/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "GitHub", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/ca/ca/62/caca6275-2086-ad07-8de3-268a44381593/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Reddit", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/4e/f4/53/4ef453d8-e52b-bc85-9332-0bbb71647198/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "Spotify", img: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/f3/9e/3e/f39e3e7f-56a7-aba3-3f75-740439b4a7b2/AppIcon-0-0-1x_U007emarketing-0-7-0-0-85-220.png/200x200ia-75.webp", link: "" },
    { name: "Instagram", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/8a/90/50/8a905050-a62a-2c1c-a62a-dbb3c372e85d/Placeholder.mill/200x200bb-75.webp", link: "" },
    { name: "ChatGPT", img: "https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/44/51/68/445168d9-f590-1148-3f43-3c80db6e6a0e/Placeholder.mill/200x200bb-75.webp", link: "" },
  ];

  const openApp = (link) => {
    if (!link) return;
    setOpenedLink(link);
  }


  return (
    <>
      <header>
        <strong>{currentTime}</strong>
        <div className="header-right">
          <img src="./images/signal.webp" alt="high-connection" />
          <img src="./images/wifi.webp" alt="wifi" />
          <img src="./images/battery.webp" alt="medium-battery" />
        </div>
      </header>
      <div className="header-notch"></div>

      <main>
        {apps.map(app => (
          <AppIcon
            key={app.name}
            appName={app.name}
            appImg={app.img}
            onOpen={openApp}
            link={app.link}
          />
        ))}
      </main>

      <section className={`opened-app ${openedLink ? "visible" : ""}`}>
        <iframe
          id="openedApp"
          src={openedLink || "about:blank"}
          title="Opened App"
        />

        <div className="home-indicator" onClick={closeApp}></div>
      </section>


      <footer>
        <AppIcon appImg={"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource211/v4/f1/c5/62/f1c56259-e7f6-1533-3039-71a5840e74b0/Placeholder.mill/200x200bb-75.webp"}></AppIcon>
        <AppIcon appImg={"https://is1-ssl.mzstatic.com/image/thumb/PurpleSource221/v4/20/73/25/207325a8-82c7-6dc9-94fb-6b9e9eb9aad8/Placeholder.mill/200x200bb-75.webp"}></AppIcon>
        <AppIcon appImg={"https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/66/2c/e7/662ce7f5-ae55-0929-64e2-94e249ed8dbc/AppIcon_TikTok-0-0-1x_U007epad-0-1-0-0-85-220.png/200x200ia-75.webp"}></AppIcon>
        <AppIcon appImg={"https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d2/d8/50/d2d850f5-5705-4ff8-a97a-66dc439d7ccc/ProductionAppIcon-0-0-1x_U007emarketing-0-8-0-0-0-85-220.png/200x200ia-75.webp"}></AppIcon>
      </footer>
    </>
  );
}

export default App;
