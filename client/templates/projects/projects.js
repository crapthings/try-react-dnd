const defaultComp = ({ projects }) => <div>
  {projects.map(({_id, title, desc, ...project}) => <div key={_id}>
    <h3>
      <a href={`/projects/${_id}`}>{title}</a>
    </h3>
    <p>{desc}</p>
  </div>)}
</div>

const defaultTracker = (props, onData) => {
  const projects = Projects.find().fetch()
  projects && onData(null, { projects })
}

export default Container(defaultTracker)(defaultComp)
