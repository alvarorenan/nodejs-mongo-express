import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: {
      type: String,
      required: [true, "O campo TÍTULO é obrigatório."]
    },
    autor: { type: mongoose.Schema.Types.ObjectId, ref: "autores", required: [true, "O campo AUTOR é obrigatório."] },
    editora: {
      type: String,
      required: [true, "O campo EDITORA é obrigatório."],
      enum: {
        values: ["Saraiva", "Alura", "Casa do Código", "Moderna", "Ática", "Scipione", "Ftd", "Positivo", "Melhoramentos", "Globo", "Outra"],
        message: "A editora {VALUE} não é válida. Tente algo como 'Saraiva', 'Alura', 'Casa do Código', 'Moderna', 'Ática', 'Scipione', 'Ftd', 'Positivo', 'Melhoramentos', 'Globo' ou 'Outra'."
      }
    },
    numeroPaginas: {
      type: Number,
      //validate para numero de paginas entre 10 e 5000
      validate: {
        validator: function (val) {
          return val >= 10 && val <= 5000;
        },
        message: props => `O número de páginas ${props.value} não é válido. Deve ser entre 10 e 5000.`
      }
    }
  },
  {
    versionKey: false
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;