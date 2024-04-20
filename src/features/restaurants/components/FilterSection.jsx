import { func } from "prop-types";

export const FilterSection = ({
  handleChangeCategory,
  handleChangePrice,
  handleChangeStatus,
  setFiltered,
}) => {
  const handleClearFilter = () => {
    setFiltered({
      status: false,
      price: 0,
      category: "",
    });

    document.getElementById("open-now").checked = false;
    document.getElementById("category").value = "";
    document.getElementById("price").value = 0;
  };

  return (
    <section className='flex flex-col py-5 gap-5 md:flex-row md:justify-between'>
      <div className='flex flex-col gap-3 md:items-center md:flex-row'>
        <h3>Filter By:</h3>
        <div className='flex gap-8'>
          {/* open now */}
          <div className='flex items-center gap-1 border-b border-slate-500'>
            <input
              type='checkbox'
              id='open-now'
              className='rounded-full'
              onChange={handleChangeStatus}
            />
            <label
              htmlFor='open-now'
              className='px-2 md:px-0'
            >
              Open Now
            </label>
          </div>
          {/* price */}
          <div className='border-b border-slate-500'>
            <select
              name='price'
              id='price'
              onChange={handleChangePrice}
            >
              <option
                aria-selected
                value={0}
              >
                Price
              </option>
              <option value='100000'>Rp.100.000</option>
              <option value='200000'>Rp.200.000</option>
              <option value='500000'>Rp.500.000</option>
              <option value='800000'>Rp.800.000</option>
              <option value='900000'>Rp.900.000</option>
              <option value='1000000'>Rp.1000.000</option>
            </select>
          </div>
          {/* category */}
          <div className='border-b border-slate-500'>
            <select
              name='category'
              id='category'
              onChange={handleChangeCategory}
            >
              <option value={""}>Category</option>
              <option value='italia'>italia</option>
              <option value='sop'>Sop</option>
              <option value='modern'>modern</option>
              <option value='jawa'>jawa</option>
              <option value='bali'>bali</option>
              <option value='spanyol'>spanyol</option>
              <option value='sunda'>sunda</option>
            </select>
          </div>
        </div>
      </div>
      <button
        className='border py-2 px-8 w-fit rounded-md bg-indigo-600 text-white'
        onClick={handleClearFilter}
      >
        Clear All
      </button>
    </section>
  );
};

FilterSection.propTypes = {
  handleChangeCategory: func,
  handleChangePrice: func,
  handleChangeStatus: func,
  setFiltered: func,
};
