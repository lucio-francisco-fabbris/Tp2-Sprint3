import express from 'express';
import { obtenerTodosSueperHeroesController, nuevoSuperHeroesController, actualizarSuperHeroesController, eliminarSuperHeroesPorIdController, eliminarSuperHeroesPorNombreController } from '../controller/superHeroController.mjs';

const router = express.Router();

router.get('/superheroes', obtenerTodosSueperHeroesController);
router.post('/superheroes/nuevo', nuevoSuperHeroesController);
router.put('/superheroes/actualizar/:id', actualizarSuperHeroesController);
router.delete('/superheroes/eliminar/id/:id', eliminarSuperHeroesPorIdController);
router.delete('/superheroes/eliminar/nombresuperheroes/:nombresuperheroes', eliminarSuperHeroesPorNombreController);

export default router;