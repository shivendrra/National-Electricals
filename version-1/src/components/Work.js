import React from 'react'

export default function Work() {
  return (
    <>
      <div className="d-flex container">
        <div className="row work-with">
          <div className="col-lg-4 col-md-12 text-center">
            <h1 className='wrk-hd'>Companies that we have worked with</h1>
            <p className='wrk-txt'>We are expert in the work we do and we like to help our clients with their problems by solving them. We have shown our ability in past by working with these companies and clients.</p>
          </div>
          <div className="col-lg-8 col-md-12">
            <table class="table table-hover d-flex justify-content-center">
              <tbody>
                <tr>
                  <th scope='row' className='wrk-no'>01</th>
                  <th>Indian AirForce</th>
                  <th><p className='wrk-info'>we worked on the contract</p></th>
                </tr>
                <tr>
                  <th scope='row' className='wrk-no'>02</th>
                  <th>North-Eastern Railway</th>
                  <th><p className='wrk-info'>we worked on the contract</p></th>
                </tr>
                <tr>
                  <th scope='row' className='wrk-no'>03</th>
                  <th>Splice Laminates ltd.</th>
                  <th><p className='wrk-info'>we worked on the contract</p></th>
                </tr>
                <tr>
                  <th scope='row' className='wrk-no'>04</th>
                  <th>Guru Tej Bahadur Electricals</th>
                  <th><p className='wrk-info'>we worked on the contract</p></th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  )
}
