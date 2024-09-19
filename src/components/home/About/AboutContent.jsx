import TableRowData from "./TableRowData";

const AboutContent = () => {
    return (
        <table>
            <tbody>
                <TableRowData
                    text="Leadership is vital from the top of corporations to the military to
                        small businesses to parents to students. We all can be
                        leaders."
                />
                <TableRowData
                    text="Entrepreneurs are heroes who should be respected and celebrated for
                        taking risks, launching products, creating jobs and
                        building companies."
                    className="delay-[50ms]"
                />
                <TableRowData
                    text="Capitalism is a critically important economic system that has
                        advanced society and the quality of life we enjoy today."
                    className="delay-75"
                />
                <TableRowData
                    text="Debate is welcome and necessary as it can lead to consensus,
                        epiphanies, and expose the truth. When a clash of ideas,
                        often emotionally-charged, evolves into civil debate and
                        objective processing of issues, everyone wins. Free
                        speech is critical to productive debate."
                    className="delay-100"
                />
            </tbody>
        </table>
    );
};
export default AboutContent;
