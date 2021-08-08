export const HANDEL_SCROLL = 'HANDEL_SCROLL';
export const handelScroll = (position) => ({
    type: HANDEL_SCROLL,
    payload: position,
});


export const Handel_SideBar = 'Handel_SideBar';
export const handelSideBar = (dir) => ({
    type: Handel_SideBar,
    payload: dir || "open",
});