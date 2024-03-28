import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Proptypes from 'prop-types'
import { getReadBook } from '../../utilities/utilities';
import { useEffect, useState } from 'react';

const PagesToRead = () => {
    const listedBookId = getReadBook();
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('books.json')
            .then(res => res.json())
            .then(data => setBooks(data));
    }, []);
    const listedBooks = books.filter(book => listedBookId.includes(book.bookId));
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
      };
      const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
      
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
      };

    return (
        <div>
          <h2 className='text-xl md:text-3xl font-bold text-center mt-5 md:mt-8'>Custom Shape Bar Chart of BookName & TotalPages </h2>
          <p className='text-center pt-2 w-[95%] md:w-[70%] mx-auto '>This is a custom bar chart of Read listed book Name and theses book's pages.if You add a book in the read Listed then it will show a another tringle in the chart also it show book name and pages.</p>
          <div className='flex justify-center w-[95%] md:w-full mx-auto mt-5 bg-gray-200 p-10 rounded-3xl'>
          <BarChart
      width={900}
      height={400}
      data={listedBooks}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="bookName" />
      <YAxis />
      <Tooltip></Tooltip>
      <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
        {listedBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
      </Bar>
    </BarChart>
            
        </div>
        </div>
    );
};
PagesToRead.propTypes = {
    props: Proptypes.object
}
export default PagesToRead;