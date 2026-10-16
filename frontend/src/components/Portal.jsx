export default function Portal({ position }) {
    return (
        <div className={`deck-portal deck-portal-${position}`} aria-hidden="true">
            <span className="deck-portal-glow" />
            <span className="deck-portal-core">
                <span className="deck-portal-swirl" />
            </span>
            <span className="deck-portal-rim" />
        </div>
    )
}
