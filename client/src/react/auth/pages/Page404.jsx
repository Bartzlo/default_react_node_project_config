const Page404 = (props) => (
  <div>
    <h2>error: 404</h2>
    <p>Page not found: {props.location.pathname}</p>
  </div>
)

export default Page404
