



import React from 'react'

const Modal = (id, titulo, contenido) => {
  return (

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div class="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{titulo}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {contenido}
      </div>
      <div className="modal-footer">
        <button type="button" classMame="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        <button type="button" className="btn btn-primary">Guardar cambios</button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Modal