function AppIcon({ appName, appImg, notif, link, onOpen }) {
    const handleClick = (e) => {
        e.preventDefault(); 
        if (link && onOpen) {
            onOpen(link);   
        }
    };

    return (
        <a href={link || "#"} className="app-icon" onClick={handleClick}>
            <img src={appImg} className="icon-img" />

            {notif > 0 && (
                <span className="notification-badge">{notif}</span>
            )}

            <span className="icon-name">{appName}</span>
        </a>
    );
}

export default AppIcon;
