import Pagination from 'react-bootstrap/Pagination';

function PaginationPerso({currentPage, setCurrentPage, maxPage}) {

    const onChangeCurrentPage = (newPage) => {
        setCurrentPage(newPage)
    }
    return (
        <Pagination>
            {currentPage > 1 && <>
                <Pagination.First onClick={() => {setCurrentPage(1)}}/>
                <Pagination.Prev onClick={() => {setCurrentPage(currentPage - 1)}}/>
                <Pagination.Item onClick={() => {setCurrentPage(1)}}>{1}</Pagination.Item>
            </>}

            <Pagination.Ellipsis disabled/>

            {currentPage > 1 &&
                <Pagination.Item onClick={() => {onChangeCurrentPage(currentPage-1)}}>{currentPage - 1}</Pagination.Item>
            }
            <Pagination.Item active>{currentPage}</Pagination.Item>
            {currentPage < maxPage &&
                <Pagination.Item onClick={() => {setCurrentPage(currentPage + 1)}}>{currentPage + 1}</Pagination.Item>
            }

            <Pagination.Ellipsis disabled/>
            {currentPage < maxPage && <>
                <Pagination.Item onClick={() => {setCurrentPage(maxPage)}}>{maxPage}</Pagination.Item>
                <Pagination.Next onClick={() => {setCurrentPage(currentPage +1)}}/>
                <Pagination.Last onClick={() => {setCurrentPage(maxPage)}}/>
            </>}
        </Pagination>
    );
}

export default PaginationPerso;