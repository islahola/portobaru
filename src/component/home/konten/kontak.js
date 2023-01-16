import React from 'react';

const KontakIsi = () => {
  return (
    <div>
    <h1 className='me-5 pb-5'>Contact Me</h1>
      <div className='ps-5 d-flex align-items-center'>
        
        <h4 className='col-6'>
        If you have questions about me or want to submit Information, Suggestions, Experiences with me , please fill out the form next to this.
        </h4>
        <div className='ps-5'>
        <form>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Pesan</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>

          </div>
          <button type="submit" class="btn btn-primary">Kirim</button>
        </form>       

        </div>
      </div>
    </div>
  );
}

export default KontakIsi;
