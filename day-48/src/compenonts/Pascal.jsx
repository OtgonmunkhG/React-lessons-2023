export default function Pascal() {
  let htmlElment = " ";
  for (let i = 0; i < pascals.length; i++) {
    for (let j = 0; j < pascals[i].length; j++) {
      htmlElment += pascals[i][j];
    }
    htmlElment += "<br/>";
  }

  return (
    <div>
      <h1>Pascal Triangle</h1>
      <div>{`${htmlElment}`}</div>
      {/* {
       
        pascal && pascal.map((pascals) => {
            console.log(p);
            const e = p.map((pascal) => {
                return(
                    <div>
                        {pascal}
                    </div>
                )
                return pascal;
            })
        })
      } */}
    </div>
  );
}
