import { v4 as uuidv4} from 'uuid';

const Footer = ({footerAPI: {titles, links}}) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer className="bg-theme pt-7 pb-5">
        <div className="nike-container text-slate-200">
          <div className="grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none gap-5">
            {titles.map((val) => (
              <div className="grid items-center" key={uuidv4()}>
                <h3 className="text-lg lg:text-base md:text-sm uppercase font-semibold">{val.title}</h3>
              </div>
            ))}

            {links.map((list) => (
              <ul className="grid items-center gap-1" key={uuidv4()}>
                {list.map((link) => (
                  <li key={uuidv4()}><a className="text-sm sm:text-xs hover:underline" href="#">{link.link}</a></li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright
              <span className="text-base font-bold ml-1">&copy;All Reserved Rights {currentYear}</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer