import React from 'react';
import Button from 'react-bootstrap/Button';

function List() {
    const truncateText = (text, maxLength) => {
        if (text.length <= maxLength) {
            return text;
        }
        return text.substring(0, maxLength) + '...';
    };

    const longText = '요조에게 필요한건 무엇일까?'; // 여기에 원하는 긴 텍스트를 넣어주세요
    const maxLength = 20; // 원하는 최대 글자 수를 입력해주세요

    return (
        <div className="list">
            <div className="w-[385px] h-[180px] mx-9 my-9 shadow flex">
                <img className="w-[145px] h-[180px]" src="https://via.placeholder.com/145x180" alt="Placeholder" />
                <div className="w-[240px] h-[180px] flex-row px-4 py-4">
                    <h5 className="flex flex-col mb-1">{truncateText(longText, maxLength)}</h5>
                    <p className="mb-1">인간실격</p>
                    <p className="relative text-sm mb-1">다자이 오사무</p>
                    <p className="relative text-sm text-right">생성자 : ryujunghwan</p>
                </div>
            </div>
        </div>
    );
}

export default List;