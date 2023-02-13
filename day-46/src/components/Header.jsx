import { IoIosTrash } from "react-icons/io";
export default function Header(props) {
  console.log(props.wishList.length)
  return (
    <div className="ui menu">
      <div className="right menu">
        <a className="item active">
          <div class="ui compact menu">
            <div class="ui simple dropdown item">
              <i className="heart icon ">{props.wishList.length}</i>

              <i class="dropdown icon"></i>
              <div class="menu">
                {props.wishList.map((w, index) => {
                  console.log(w);
                  return (
                    <div className="item">
                      {w.name}
                      <button
                        className="ui button"
                        onClick={() => {
                          console.log("remove");
                          console.log(w.id);
                          props.setWishList(
                            props.wishList.filter((wish) => wish.id !== w.id)
                          );
                        }}
                      >
                        <IoIosTrash />
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </a>
        <a className="item">
          <i className="shopping basket icon"></i>
        </a>
      </div>
    </div>
  );
}
