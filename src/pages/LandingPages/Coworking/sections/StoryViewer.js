import React, { useState } from "react";
import MKBox from "components/MKBox"; // Assuming this import exists in your project
import MKTypography from "components/MKTypography"; // Assuming this import exists in your project
import Grid from "@mui/material/Grid"; // Assuming you're using Material-UI for Grid
import Container from "@mui/material/Container"; // Assuming you're using Material-UI for Container
const stories = [
  {
    id: 1,
    image:
      "https://nathella.s3.eu-north-1.amazonaws.com/bg-nat2.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQZ6ITDMZ43ZQP6BD%2F20250324%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250324T205313Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEA9lEkhJ%2Fi2Z7WVUWHQEe9W%2FWr%2F9oDAwyrIqlq9Y4SP8cCIBAwtVwpdDPlhgSdxu8wsg6abnV4pUk1cNbMRRA2zL0cKqICCPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMDU1NzE4Mzg2NDgzIgyoLt1wJ0phkwYckSwq9gHXyoVFlFGY9BgI8q8HMuVhSWWJHSDJdtUD%2BRV4orTTOzSR1gSpyVQp8OOy5rofzUWcHBWJiBi6OuCrhkYsjQe1UmfcF1C79KwEshT%2F%2B2qzZDaWLH0oHRJMIGtu1ldZXG3gzzyog%2FalzvXqwtcN6dEupMU%2BS%2FhZVm3fBecN2UJDoTWFlZgL3Ls4P8rFlBMe%2Bc6LwCQEo2IdLjspU1lR2eolZ%2BzDFg5TlCZTDzv6Vg3DvqK3b7TY9mBYWjBZ%2Fi%2FbfDMAkEf%2BepTLaI%2Bue2xwJvO2V%2FeKXBdgZqbo1cfFo3xJZXUqJoVNJODwBciIX7ThunJqvzQTb2Mw9%2FSGvwY63wH%2BQyTDAlo%2Fv6v8jRNANKbvrZokN4hk%2B9%2BZpfXmmiqqQ56DuA5QBxaQafsg6Z2wWV9rlfOMO5mXUSnjtiDlxFui5lZAq5TN1vHKfrkjVCPxbKvJ574h1nBSlFOvNOpVLRhLDRqbCfXdG8a85rvYTdFOmEp6%2FXEtjgtLHcOJPRmoCXx3Fy9syYYP1hOtwfd%2Fjfm42fVKztHedJ0Fx4kDDvwcKn2mhTAO6rlitIEfXBqtBNNhnxIdSkJAqIGkKuv0Ier4VkwyZzwpmcF06tUJWGkQDBjXuVQjGf8rf82ZZrHx&X-Amz-Signature=95f85dd44d300031370e0fb8215fe38e27ec979db3fb939146517c182c0c45d5&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    title: "Nová Akce!",
    description: "Získejte 20% slevu a získat více.",
    link: "https://hellapretty.com/discount",
  },
  {
    id: 2,
    image:
      "https://hellapretty.s3.eu-north-1.amazonaws.com/IMG_3528.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQZ6ITDMZV5SUBBJB%2F20250324%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250324T205030Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9IypK3fTWjAYlcI%2Fm9WCkPQ5283UVlIMHnKCPh5Y2PkCIQCO2N15J6ac3gXJg9muUdQ4%2Bs8BPyk42f0h3MHdsfnYySqiAgj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA1NTcxODM4NjQ4MyIMBFWw18TcXmtqSf01KvYBkrIT%2BtATecNFdX9%2FOJDfyvyHTT0CbIpUgbSIbbjtyEfWEfYOPWfTsXm9GgKaX%2BgBAdNXx88bkxmPkSXWMMVBdqDuPA%2By2YQfWtKx%2BJ9qmvR%2F1FJ4kXCaSiNuPTbZIKe8Yj0%2FhyemsK7wE5X2bxu4EefFjSok33Tp7PQMi%2B1w67BOpxy352v3fJX6Y261jYuU9SpcTJBcscEOefLI%2FMWX48BKFgEijAg8XpHoKWGi4eLTKuS992nwrAJCZHDt1r98okF663%2Br965%2B1ILGEjii5pYJWuPWNib9a01xyMCgzQVYC5gUvlhLP7F0Kalk1%2BIHB9DbR6xOMPf0hr8GOt4BkB0g9ZU%2FmI0oJMSs1RiMdyUBT8JYywyPv0jfCmuRqwVEHWt53ZovbTQU4bNrRa6kXvE%2BjHKBpc%2BgNa1f%2F0MUKca%2BaVZ6Re8%2FjCa2Vjy8NGA65wPqlsIr4uQXpmsIXu8Qh1p5DpMZpETZ5EPldOS53vBLsR3MssDbcjAjTmHfMB430GpnZn8FP8CtYaa46%2FyUZ4MXCXP66cSM6gSUsOcfEsOBhUXTsAn0t6WLoxGQ3BHU%2FF%2FY7F3zYvZItbVcuEo%2B7sM%2BIBd8Lnbv9W9Mp9vPn26d8FmkDo%2BgXfUIa74K&X-Amz-Signature=d70b6ddf73996f82a9cb0d965a7b73e1e1eece908446222a4069a7739581413c&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    title: "Speciální Ošetření",
    description: "Vyzkoušejte naši novou službu. Určitě vás to překvapí!",
    link: "https://hellapretty.com/treatment",
  },
  {
    id: 3,
    image:
      "https://hellapretty.s3.eu-north-1.amazonaws.com/bg-nat.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAQZ6ITDMZV5SUBBJB%2F20250324%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20250324T204949Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA9IypK3fTWjAYlcI%2Fm9WCkPQ5283UVlIMHnKCPh5Y2PkCIQCO2N15J6ac3gXJg9muUdQ4%2Bs8BPyk42f0h3MHdsfnYySqiAgj2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDA1NTcxODM4NjQ4MyIMBFWw18TcXmtqSf01KvYBkrIT%2BtATecNFdX9%2FOJDfyvyHTT0CbIpUgbSIbbjtyEfWEfYOPWfTsXm9GgKaX%2BgBAdNXx88bkxmPkSXWMMVBdqDuPA%2By2YQfWtKx%2BJ9qmvR%2F1FJ4kXCaSiNuPTbZIKe8Yj0%2FhyemsK7wE5X2bxu4EefFjSok33Tp7PQMi%2B1w67BOpxy352v3fJX6Y261jYuU9SpcTJBcscEOefLI%2FMWX48BKFgEijAg8XpHoKWGi4eLTKuS992nwrAJCZHDt1r98okF663%2Br965%2B1ILGEjii5pYJWuPWNib9a01xyMCgzQVYC5gUvlhLP7F0Kalk1%2BIHB9DbR6xOMPf0hr8GOt4BkB0g9ZU%2FmI0oJMSs1RiMdyUBT8JYywyPv0jfCmuRqwVEHWt53ZovbTQU4bNrRa6kXvE%2BjHKBpc%2BgNa1f%2F0MUKca%2BaVZ6Re8%2FjCa2Vjy8NGA65wPqlsIr4uQXpmsIXu8Qh1p5DpMZpETZ5EPldOS53vBLsR3MssDbcjAjTmHfMB430GpnZn8FP8CtYaa46%2FyUZ4MXCXP66cSM6gSUsOcfEsOBhUXTsAn0t6WLoxGQ3BHU%2FF%2FY7F3zYvZItbVcuEo%2B7sM%2BIBd8Lnbv9W9Mp9vPn26d8FmkDo%2BgXfUIa74K&X-Amz-Signature=9ac27373ccaef6ff3f2d26027206c4380052a7c1eefcaf81b2b1d560c90a3459&X-Amz-SignedHeaders=host&response-content-disposition=inline",
    title: "Sleva na Peeling",
    description: "Pouze tento týden, nenechte si ujít.",
    link: "https://hellapretty.com/peeling",
  },
];

function StoryViewer() {
  const [currentStory, setCurrentStory] = useState(null);

  const openStory = (index) => setCurrentStory(index);
  const closeStory = () => setCurrentStory(null);

  const nextStory = () => {
    if (currentStory < stories.length - 1) {
      setCurrentStory(currentStory + 1);
    } else {
      closeStory();
    }
  };

  const prevStory = () => {
    if (currentStory > 0) {
      setCurrentStory(currentStory - 1);
    }
  };

  // Function to limit text to 3 words
  const limitText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <Container>
      <Grid container spacing={3} sx={{ mt: 3 }}>
        <Grid item xs={12} md={6} lg={4}>
          <MKBox mt={3}>
            <MKTypography variant="h4">Stories</MKTypography>
            <div
              style={{ display: "flex", gap: "20px", padding: "10px", justifyContent: "center" }}
            >
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  onClick={() => openStory(index)}
                  style={{
                    textAlign: "center", // Center-align all content
                    cursor: "pointer",
                    width: "120px", // Ensure consistent width for the stories
                  }}
                >
                  <div
                    style={{
                      width: "100px",
                      height: "100px",
                      borderRadius: "50%",
                      border: "3px solid red",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      overflow: "hidden",
                      marginBottom: "10px", // Increased margin for better separation
                    }}
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                  <MKTypography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      color: "#333",
                      marginBottom: "5px", // Add some space after the title
                    }}
                  >
                    {limitText(story.title, 3)} {/* Limit the title to 3 words */}
                  </MKTypography>
                  <MKTypography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontStyle: "italic", // Optional: Give it a softer look
                      marginBottom: "10px", // Add some space below the description
                      height: "40px", // Limit height to prevent text overflow
                      lineHeight: "1.2",
                      overflow: "hidden",
                      textOverflow: "ellipsis", // Truncate text if it overflows
                    }}
                  >
                    {limitText(story.description, 3)} {/* Limit the description to 3 words */}
                  </MKTypography>
                </div>
              ))}
            </div>

            {/* Full-Screen Story Viewer (Fixed Overlay) */}
            {currentStory !== null && (
              <div
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  width: "100vw",
                  height: "100vh",
                  background: "rgba(0, 0, 0, 0.8)", // Slightly darkened background
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                  color: "white",
                  zIndex: 9999, // Make sure it's above all other elements
                  padding: "20px", // Add some padding for a cleaner look
                }}
              >
                <button
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                    fontSize: "24px",
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    color: "white",
                  }}
                  onClick={closeStory}
                  aria-label="Close Story"
                >
                  ✖
                </button>

                <button
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "40%",
                    height: "100%",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                  }}
                  onClick={prevStory}
                  aria-label="Previous Story"
                />

                <button
                  style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "40%",
                    height: "100%",
                    cursor: "pointer",
                    background: "transparent",
                    border: "none",
                  }}
                  onClick={nextStory}
                  aria-label="Next Story"
                />

                <img
                  src={stories[currentStory].image}
                  alt={stories[currentStory].title}
                  style={{
                    maxWidth: "80%", // Adjust width for better display
                    maxHeight: "80%",
                    borderRadius: "10px",
                    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.5)", // Optional: Add some shadow for depth
                  }}
                />
                <h2>{stories[currentStory].title}</h2>
                <p>{stories[currentStory].description}</p>
                <a
                  href={stories[currentStory].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffcc00",
                    textDecoration: "none",
                    fontSize: "18px",
                    fontWeight: "bold",
                  }}
                >
                  Více Informací
                </a>
              </div>
            )}
          </MKBox>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StoryViewer;
