import React,{useState} from 'react';

const KontakIsi = () => {
  const [kirim, setKirim] = useState(false);
  const handleKirim = () =>{
    setKirim(kirim ? false :true)
  }
  return (
    <div className='col-11 pb-5 container' id="kontak">
    <h1  className='pb-4'><span>Contact </span> Me</h1>
      <div className='d-flex align-items-center kontak-wrap'>
        <h4 className='col-10 col-lg-6'>
        If you have questions about me or want to submit Information, Suggestions, Experiences with me , please fill out the form next to this.
        </h4>
        <div className='col-10 col-lg-5'>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Pesan</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
          </div>
          <button onClick={handleKirim} class="btn ">Kirim</button>
        <div className={kirim ? 'd-flex kontak-kirim' : 'd-none'}>
          <div className='col-5 bg-dark p-4 wrap-terkirim'><h3>Telah terkirim</h3>
          <div><button onClick={handleKirim} class="btn ">Selesai</button>
          </div></div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default KontakIsi;
