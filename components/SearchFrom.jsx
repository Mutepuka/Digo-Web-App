"use client";

const SearchFrom = () => {

    const hanldeSearchClose=()=>{
        document.body.classList.remove('box-collapse-open');
        document.body.classList.add('box-collapse-close');

    }
  return (
    <>
    <div className="click-closed"></div>
    <div className="box-collapse">
        <div className="title-box-d">
            <h3 className="title-d">Search Property</h3>
        </div>
        <span className="close-box-collapse right-boxed bi bi-x" onClick={hanldeSearchClose}>

        </span>
        <div className="box-collapse-wrap form">
            <form className="form-a">
                <div className="row">
                    <div className="col-md-12 mb-2">
                        <div className="form-group">
                            <label className="pb-2" htmlFor="Type">Keyboard</label>
                            <input
                            type="text"
                            placeholder="keyboard"
                            className="form-control form-control-lg form-control-a" 
                            />
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <label className="pb-2" htmlFor="Type">type</label>
                            <select className="form-control form-select form-control-a" id="Type">
                                <option>All</option>
                                <option>For Rent</option>
                                <option>For Sale</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-md-6 mb-2">
                        <div className="form-group mt-3">
                            <label htmlFor="city" className="pb-2">City</label>
                            <select className="form-control form-select form-control-a" id="city">
                                <option>All Cities</option>
                                <option>Lusaka</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </div>
    </>
  )
}

export default SearchFrom