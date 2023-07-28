
import { Divider, Input } from 'antd';

// Iteration 5
function Search({searchHandler}) {

  return (
    <>
      <Divider>Search</Divider>

      <label className='label-style'>Search</label>
      <Input value={undefined} type="text" onChange={(e) => {searchHandler(e)}} />
    </>
  );
}

export default Search;