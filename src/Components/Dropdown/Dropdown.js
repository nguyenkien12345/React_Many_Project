import React, { useState, useEffect } from 'react';

function Dropdown() {

    const [countries, setCountries] = useState([]);
    const [courses, setCourses] = useState([]);

    const [allCourses, setAllCourses] = useState([]);
    const [course, setCourse] = useState();

    const getUnique = (arr, comppare) => {                          //// Nhận 2 giá trị đầu vào: ts1 là dữ liệu, ts2 là giá trị cần so sánh
        const unique = arr
            .map(e => e[comppare])                                  //// lưu trữ các giá trị so sánh trong mảng
            .map((e, i, final) => final.indexOf(e) === i && i)      //// lưu trữ các khóa duy nhất của các đối tượng
            .filter(e => arr[e])                                    //// Loại bỏ các khoá trùng và lưu trữ các đối tượng duy nhất
            .map(e => arr[e]);
        return unique;
    }

    const onHandleChangeCourse = (e) => {
        setCourse(e.target.value);
    }

    const filterDropdown = allCourses.filter(result => {
        return result.tag === course;
    })

    useEffect(() => {
        const countries = require('../../json/countries.json');       //// Lấy ra danh sách các quốc gia
        const uniqueCountry = getUnique(countries.world, 'country');  //// Lấy ra các quốc gia duy nhất không bị trùng lặp dựa vào trường country
        setCountries(uniqueCountry);

        const courses = require('../../json/courses.json');           //// Lấy ra danh sách các khoá học
        const uniqueCourse = getUnique(courses, 'tag');               //// Lấy ra các khoá học duy nhất không bị trùng lặp dựa vào trường tag
        setCourses(uniqueCourse);

        setAllCourses(courses);                                      //// Lấy ra tất cả các khoá học không phân biệt trùng lặp 
    }, [])

    return (
        <>
            <form>
                <select>
                    {countries.map(item => (
                        <option key={item.id} value={item.country}>
                            {item.country}
                        </option>
                    ))}
                </select>
                <br />
                <hr />
                <select value={course} onChange={onHandleChangeCourse}>
                    {courses.map(item => (
                        <option key={item.id} value={item.tag}>
                            {item.course}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Submit" />
            </form>

            <div>
                {filterDropdown.map(item => {
                    return (
                        <h1 key={item.id}>{item.course}</h1>
                    )
                }
                )}
            </div>
        </>

    );
}

export default Dropdown;
