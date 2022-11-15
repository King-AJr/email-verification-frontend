import {useParams, Link} from 'react-router-dom'
import React from 'react'

const Verify = () => {
   const params = useParams();
   console.log(params.error);
  return (
    <div>
      <section className="ph3 ph5-ns pv5">
  <article className="mw8 center br2 ba b--light-blue bg-lightest-blue">
    <div className="dt-ns dt--fixed-ns w-100">
      <div className="pa3 pa4-ns dtc-ns v-mid">
        <div>
          <h2 className="fw4 blue mt0 mb3">Email verification </h2>
          <p className="black-70 measure lh-copy mv0">
          {params.message}.
          </p>
        </div>
      </div>
      <div className="pa3 pa4-ns dtc-ns v-mid">
            <Link to='/signin' className="no-underline f6 tc db w-100 pv3 bg-animate bg-blue hover-bg-dark-blue white br2">{params.error === ":error=true" ? (<h3>Sign up</h3>) : (<h3>Sign in</h3>) }</Link>
      </div>
    </div>
  </article>
</section>    
    </div>
  )
}
export default Verify

      