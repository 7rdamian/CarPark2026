import './Pagination.css'
import { useFilters } from '../../hooks/useFilters'
import { useCarsList } from '../../hooks/useCarsList'

export function Pagination() {
    const { page, setPage } = useFilters()
    const { totalPages = 1 } = useCarsList()

    const pages = Array.from({ length: Math.max(1, totalPages) }, (_, i) => i + 1)

    const goTo = (p: number) => setPage(p)
    const prev = () => setPage(Math.max(1, page - 1))
    const next = () => setPage(Math.min(totalPages, page + 1))

    return (
        <div className="Pagination">
            <button 
                type="button" 
                className="Pagination__button" 
                onClick={prev} disabled={page <= 1}
                >Prev
            </button>

            {pages.map((p) => (
                <button
                    key={p}
                    type="button"
                    className={`Pagination__button${p === page ? ' Pagination__button--active' : ''}`}
                    onClick={() => goTo(p)}
                >
                    {p}
                </button>
            ))}

            <button type="button" className="Pagination__button" onClick={next} disabled={page >= totalPages}>
                Next
            </button>
        </div>
    )
}