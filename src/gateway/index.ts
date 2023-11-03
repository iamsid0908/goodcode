import { Application, Router } from 'express';
import Services from './services';
import { forEach } from 'lodash';
import { errorHandler } from '../common/utils/handlers';

const initGateway = function(app: Application ) {
    
    // Create gateway router
    const gatewayRouter = initGatewayRouter()

    // Expose gateway router to express
    app.use('/v1', gatewayRouter)

    // Attach error handler
    app.use(errorHandler);
}

const initGatewayRouter = function() {
    const globalRouter = Router();

    // middleware that is specific to this router
    globalRouter.use((req, res, next) => {
        console.log('Time: ', Date.now())
        next();
    });

    globalRouter.get('/', function (req, res) {
        res.send('Welcome to Brillante API')
    });

    // health check
    globalRouter.get('/healthCheck', (req: any, res: any) => res.success({ data: 'Success' }));

    const routerStack: Record<string, Router> = {};

    // Initialize service routers
    forEach(Services, (service, serviceName) => {
        const router = Router();

        forEach(service, (method, methodName) => {
            console.log(`Initializing service method: ${methodName}`);
            router.post(`/${methodName}`, method)
        })

       
        routerStack[serviceName] = router
    });

    // Attach service routers to global router
    forEach(routerStack, (router, service) => {
        console.log(`Initializing service: ${service}`);
        globalRouter.use(`/${service}`, router);
    });

    return globalRouter;
}

export const Gateway = {
    initGateway
}