import React from 'react'

function Card(props) {

    // Được kích hoạt khi người sử dụng bắt đầu kéo đối tượng.
    const dragStart = e => {
        const target = e.target;

        e.dataTransfer.setData('card_id', target.id);

        setTimeout(() => {
            target.style.display = 'none';
        }, 0);
    }

    // Được tạo khi chuột di chuyển qua một phần tử khi một hoạt động kéo đang xảy ra. Hầu hết thời gian, hoạt động sẽ là giống như sự kiện dragenter.
    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
            id={props.id}
            className={props.className}
            draggable={props.draggable}
            onDragStart={dragStart}
            onDragOver={dragOver}
        >
            {props.children}
        </div>
    )
}

export default Card
