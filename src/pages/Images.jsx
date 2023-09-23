import { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { data } from "../DB";
import "../styles/Images.css";
import ClipLoader from "react-spinners/ClipLoader";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";

export default function Images() {
  const [images, setImages] = useState(data);
  const [loading, setLoading] = useState(true);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(images);
    const [updatedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, updatedItem);
    setImages(items);
    console.log(result);
    console.log(items);
    // setLoading(true);
  }

  // const onDragEnd = (event) => {
  //   const srcElement = event?.srcElement || {};
  //   console.log("onDragEnd", event);
  // }

  useEffect(() => {
    setTimeout(() => {
      const newData = data;
      setImages(newData);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div className="row">
          <div className="mt-3 mb-3">
            <h1 className="text-center">
              <strong>Welcome to ANTIQUE GALLERIA.</strong>
            </h1>
            <div className="mt-4 mb-4">
              <p>
                where you can admire the masterpieces of some of the most
                influential artists in history. Whether you are a fan of
                impressionism, surrealism, or pop art, you will find something
                to inspire and delight you in our collection. You can marvel at
                the vibrant colors and brushstrokes of Vincent van Gogh, who
                painted his famous Starry Night while suffering from mental
                illness. You can explore the dreamlike world of Salvador Dali,
                who used his imagination and subconscious to create bizarre and
                captivating images like The Persistence of Memory. You can
                appreciate the simplicity and humor of Andy Warhol, who turned
                everyday objects and celebrities into iconic pop art pieces like
                Campbell’s Soup Cans and Marilyn Monroe. These are just some of
                the examples of the amazing artworks that await you in our
                galleria. Come and discover the beauty and creativity of these
                artists, who changed the way we see art and the world. You will
                not regret it, unless you have a very bad taste in art. But
                don’t worry, we won’t judge you. 😉
              </p>
            </div>
          </div>
          <div>
            <div className="d-flex justify-content-center align-items-center">
              {loading ? (
                <ClipLoader
                  size={150}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <DragDropContext onDragEnd={handleOnDragEnd}>
                  <Droppable droppableId="pictures">
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        className="mt-3 mb-3 row"
                        //   style={{
                        //     display: `grid`,
                        //     gridTemplateColumns: `repeat(4,1fr)`,
                        //     gap: "12px",
                        //   }}
                      >
                        {images.map((datum, index) => {
                          const { id, Name, tag, url } = datum;

                          return (
                            <Draggable key={id} draggableId={id} index={index}>
                              {(provided) => (
                                <div
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="image-provider-body col-xl-3 col-lg-4 col-md-6"
                                  // style={{ borderRadius: "15px", width: "" }}
                                >
                                  <div className="image-body">
                                    <img
                                      src={url}
                                      alt={`${Name} of the painting`}
                                      className="img-fluid image"
                                      style={{ borderRadius: "15px" }}
                                    />
                                    <div className="tag-text">
                                      <button className="tag-btn">{tag}</button>
                                    </div>
                                  </div>
                                  <div>
                                    <h6>{Name}</h6>
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          );
                        })}
                        {provided.placeholder}
                      </div>
                    )}
                  </Droppable>
                </DragDropContext>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
