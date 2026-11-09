const express = require('express');
const path = require('path')
const app = express()
const PORT = 2002;



app.get("/api/items/:id", (req, res) => {
  const item = items.find(i => i.id === Number(req.params.id));

  if (!item) {
    return res.status(404).json({
      info: {
        code: "NOT_FOUND",
        message: `No item with id ${req.params.id}`,
      },
    });
  }
  res.status(200).json(item);
});

app.delete('./:id',async(req,res)=>{
    await ServiceWorker.remove(req.params.id);
    res.status(204).end();
})
app.listen(PORT, () => {
  console.log("API running at http://localhost:2002");
});
