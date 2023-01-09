export default function ParentToolBar() {
    return (

        <div className="Toolbar"
            onClick={() => {
                alert("You clicked on the toolbar!")

            }}>
            <button onClick={(e) => {
                e.stopPropagation();
                alert("Playing!")
            }}>Play Movie</button>
            
            <button onClick={(e) => {
                e.stopPropagation();
                alert("Uploading!")
            }}>Uploading Image</button>

        </div>

    )
}