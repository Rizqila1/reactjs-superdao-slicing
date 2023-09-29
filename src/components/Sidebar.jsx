export default function Sidebar({ showSidebar, setShowSidebar }) {
  return (
    <>
      <aside
        onClick={() => setShowSidebar(false)}
        className={
          "fixed h-screen bg-white top-0 left-0 z-50 duration-500 " +
          (showSidebar ? "w-[calc(100vw-100px)]" : "w-0")
        }
      >
        <div> </div>
      </aside>
    </>
  );
}
