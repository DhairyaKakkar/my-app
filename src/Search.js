import { useState } from 'react';
import ApiGenre from './ApiGenre.js';

function Searchbar() {
  const [form, setForm] = useState({ name: '' });

  return (
    <>
    <div className = 'app'>
            <img className = 'watermark' 
                src = 'https://play-lh.googleusercontent.com/u5zjxp6IbaDoGpWOk24q5L5Ej0jiwLjS3-h7PAHy0xbawRLfO37f010C23gcD9GL1gh4'
                alt = 'Chord watermark'
            />
            <img className = 'side' 
                src = 'https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
                alt = 'Chord watermark'
            />
            <img className = 'right' 
                src = 'https://t3.ftcdn.net/jpg/08/13/85/76/360_F_813857642_TvxHTtUwNxTFdYGh9tPoQrP0eJonHCwg.jpg'
                alt = 'Chord watermark'
            />
      <div className = 'content'>
        <label>
          First name:
          <input
            value={form.name}
            onChange={e => {
              setForm({
                ...form,
                name: e.target.value
              });
            }}
          />
        </label>
        {form.name}
        <ApiGenre searchedWord={form.name} />
      </div>
    </div>
    </>
  );
}

export default Searchbar;