import React from 'react'

function Board(props) {

    // Kéo
    const dragOver = e => {
        e.preventDefault();
    }

    // Thả
    const drop = e => {
        e.preventDefault();

        // dataTransfer -> giữ dữ liệu về hoạt động kéo và thả. 
        // e.dataTransfer.getData('card_id') -> Trả về dữ liệu đã xác định. Nếu không có dữ liệu nào, trả về chuỗi trống. 
        const card_id = e.dataTransfer.getData('card_id');

        const card = document.getElementById(card_id);
        card.style.display = 'block';

        e.target.appendChild(card);
    }

    return (
        <div 
            id={props.id} 
            className={props.className} 
            onDragOver={dragOver}
            onDrop={drop} 
        >
            {props.children}
        </div>
    )
}

export default Board