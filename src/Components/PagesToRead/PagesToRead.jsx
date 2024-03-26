import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
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
        <div className='flex justify-center mt-5 bg-gray-300 p-10 rounded-3xl'>
             <CartesianGrid strokeDasharray="3 3" />
            <BarChart width={800} height={600} data={listedBooks} >
                <XAxis dataKey={"bookName"}></XAxis>
                <YAxis dataKey={"totalPages"}></YAxis>
          <Bar dataKey={"totalPages"} shape={<TriangleBar label={{ position: 'top' }}/>}>
          {listedBooks.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={colors[index % 20]} />
        ))}
          </Bar>
            </BarChart>
            
        </div>
    );
};
PagesToRead.propTypes = {
    props: Proptypes.object
}
export default PagesToRead;